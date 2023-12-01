import { createContext, useReducer, useEffect, useContext } from "react";

const initialState = (typeof window !== "undefined" &&
  JSON.parse(localStorage.getItem("bookmark"))) || {
  ayahs: [],
};

const actionTypes = {
  ADD_BOOKMARK_AYAH: "ADD_BOOKMARK_AYAH",
  REMOVE_BOOKMARK_AYAH: "REMOVE_BOOKMARK_AYAH",
};

const BookMarkContext = createContext();

const bookmarkReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_BOOKMARK_AYAH:
      return {
        ...state,
        ayahs: state.ayahs.concat(action.payload),
      };
    case actionTypes.REMOVE_BOOKMARK_AYAH:
      return {
        ...state,
        ayahs: state.ayahs.filter(
          (ayah) => ayah.number.inQuran !== action.payload
        ),
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const BookmarkProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookmarkReducer, initialState);

  useEffect(() => {
    localStorage.setItem("bookmark", JSON.stringify(state));
  }, [state]);

  return (
    <BookMarkContext.Provider value={{ state, dispatch }}>
      {children}
    </BookMarkContext.Provider>
  );
};

const useBookmark = () => {
  const context = useContext(BookMarkContext);
  if (!context) {
    throw new Error("useBookmark must be used within a BookmarkProvider");
  }
  return context;
};

const useBookmarkAyah = () => {
  const { state, dispatch } = useBookmark();

  const addBookmarkAyah = (ayah) => {
    dispatch({ type: actionTypes.ADD_BOOKMARK_AYAH, payload: ayah });
  };

  const deleteBookmarkAyah = (numberInQuran) => {
    dispatch({
      type: actionTypes.REMOVE_BOOKMARK_AYAH,
      payload: numberInQuran,
    });
  };

  const hasBookmarkedAyah = (numberInQuran) => {
    return state.ayahs.some((ayah) => ayah.number.inQuran === numberInQuran);
  };

  const toggleBookmarkAyah = (ayah) => {
    if (hasBookmarkedAyah(ayah.number.inQuran)) {
      deleteBookmarkAyah(ayah.number.inQuran);
    } else {
      addBookmarkAyah(ayah);
    }
  };

  return {
    state,
    toggleBookmarkAyah,
    addBookmarkAyah,
    hasBookmarkedAyah,
    deleteBookmarkAyah,
  };
};

export { BookmarkProvider, useBookmarkAyah, };
