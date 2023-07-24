// Define reusable styles
export const titleStyle = {
  color: "var(--neutral-n-1000, #05051E)",
  fontFamily: "Inter",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "32px",
  marginBottom: "8px",
};

export const subtitleStyle = {
  color: "var(--neutral-n-700, #60607D)",
  fontFamily: "Inter",
  fontSize: "16px",
  fontStyle: "italic",
  fontWeight: 400,
  lineHeight: "24px",
  marginBottom: "32px",
};

export const linkButtonStyle = {
  display: "flex",
  padding: "12px 24px",
  alignItems: "center",
  gap: "8px",
  borderRadius: "4px",
  border: "2px solid var(--blue-b-550, #0660C8)",
  background: "var(--neutral-n-0, #FFF)",
};

export const linkTextStyle = {
  color: "var(--blue-b-550, #0660C8)",
  textAlign: "center",
  fontFamily: "Inter",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "20px",
};
export const rightTableCell = {
  padding: "0px",
  flex: "1 0 0 ",
  color: "var(--neutral-n-700, #60607D)",
  fontFamily: "Inter",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "22px",
};

export const leftTableCell = {
  padding: "0px",

  width: "180px",
  color: "var(--neutral-n-1000, #05051E)",

  /* Body/Body-Strong-1 */
  fontFamily: "Inter",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "22px",
};
export const tableRowStyle = {
  display: "flex",
  alignItems: "flex-start",
  gap: "8px",
  alignSelf: "stretch",
  "& .MuiTableCell-root": {
    borderBottom: "none",
  },
};

export const commentsSections = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "12px",
  alignSelf: "stretch",
};
