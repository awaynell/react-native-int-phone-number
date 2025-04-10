import { Platform, StyleSheet } from "react-native";

const containerBase = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderWidth: 1,
  borderStyle: "solid",
  borderRadius: 12,
  width: "100%",
  height: 56,
};

const flagContainerBase = {
  justifyContent: "center",
  height: "50%",
  paddingLeft: 12,
  paddingRight: 10,
  flexDirection: "row",
  alignItems: "center",
  marginTop: -1.5,
};

const caretBase = {
  width: 0,
  height: 0,
  borderWidth: 7,
  borderBottomWidth: 0,
  borderLeftColor: "transparent",
  borderRightColor: "transparent",
};

const dividerBase = {
  width: 1,
  height: "60%",
  marginLeft: 16,
  marginRight: 10,
};

const flagTextBase = {
  fontSize: 16,
  fontWeight: "500",
};

const inputBase = {
  flex: 1,
  width: "100%",
  fontSize: 16,
};

const modalSectionTitleBase = {
  marginVertical: 10,
};

const styles = StyleSheet.create({
  lightContainer: {
    ...containerBase,
    backgroundColor: "#FFFFFF",
    borderColor: "#AAAAAA",
  },
  darkContainer: {
    ...containerBase,
    backgroundColor: "#575757",
    borderColor: "#F3F3F3",
  },
  lightFlagButton: {
    ...flagContainerBase,
    backgroundColor: "#F3F3F3",
  },
  darkFlagButton: {
    ...flagContainerBase,
    backgroundColor: "#808080",
  },
  flag: {
    color: "#FFFFFF",
    fontSize: 20,
    marginRight: 6,
    fontFamily:
      Platform.OS === "web"
        ? typeof navigator !== "undefined" &&
          navigator?.userAgent?.includes("Win")
          ? "TwemojiMozilla"
          : "System"
        : "System",
  },
  lightCaret: {
    ...caretBase,
    borderTopColor: "#0A0A0A",
  },
  darkCaret: {
    ...caretBase,
    borderTopColor: "#F3F3F3",
  },
  lightDivider: {
    ...dividerBase,
    backgroundColor: "#AAAAAA",
  },
  darkDivider: {
    ...dividerBase,
    backgroundColor: "#F3F3F3",
  },
  lightFlagText: {
    ...flagTextBase,
    color: "#0A0A0A",
  },
  darkFlagText: {
    ...flagTextBase,
    color: "#F3F3F3",
  },
  lightInput: {
    ...inputBase,
    color: "#F8F8F7",
  },
  darkInput: {
    ...inputBase,
    color: "#F3F3F3",
  },
  lightModalSectionTitle: {
    ...modalSectionTitleBase,
    color: "#0A0A0A",
  },
  darkModalSectionTitle: {
    ...modalSectionTitleBase,
    color: "#F3F3F3",
  },
  lightCountryPicker: {
    modal: {
      backgroundColor: "#FFFFFF",
    },
    backdrop: {},
    line: {
      backgroundColor: "transparent",
    },
    itemsList: {},
    textInput: {
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "#AAAAAA",
      backgroundColor: "#FFFFFF",
      height: 56,
    },
    countryButtonStyles: {
      borderWidth: 1,
      borderColor: "#AAAAAA",
      marginVertical: 4,
      paddingVertical: 0,
    },
    searchMessageText: {},
    countryMessageContainer: {},
    flag: {
      color: "#FFFFFF",
      fontSize: 20,
      fontFamily:
        Platform.OS === "web"
          ? typeof navigator !== "undefined" &&
            navigator?.userAgent?.includes("Win")
            ? "TwemojiMozilla"
            : "System"
          : "System",
    },
    dialCode: {},
    countryName: {},
  },
  darkCountryPicker: {
    modal: {
      backgroundColor: "#333333",
      borderWidth: 1,
    },
    backdrop: {},
    line: {
      backgroundColor: "transparent",
    },
    itemsList: {},
    textInput: {
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "#F3F3F3",
      color: "#F3F3F3",
      backgroundColor: "#333333",
      height: 46,
    },
    countryButtonStyles: {
      borderWidth: 1,
      borderColor: "#F3F3F3",
      backgroundColor: "#666666",
      marginVertical: 4,
      paddingVertical: 0,
    },
    searchMessageText: {},
    countryMessageContainer: {},
    flag: {
      color: "#FFFFFF",
      fontSize: 20,
      fontFamily:
        Platform.OS === "web"
          ? typeof navigator !== "undefined" &&
            navigator?.userAgent?.includes("Win")
            ? "TwemojiMozilla"
            : "System"
          : "System",
    },
    dialCode: {
      color: "#F3F3F3",
    },
    countryName: {
      color: "#F3F3F3",
    },
  },
});

export default styles;
