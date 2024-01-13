import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    orange: object;
    white: object;

  }
  interface PaletteOptions {
    orange?: object;
    white?: object;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#777E90',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          color: '#777E90',
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#F0B90B',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#F0B90B',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        colorPrimary: {
          color: '#777E90'
        },
        root: {
          '&.Mui-checked': {
            color: '#777E90'
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            color: '#777E90',
            '& fieldset': {
              borderColor: '#777E90',
              borderRadius: '11px',
              fontSize: '0.875 rem'
            },
            '&:hover fieldset': {
              borderColor: '#777E90',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#777E90',
            },
          }
        }
      }
    },
  },

  palette: {
    primary: {
      main: '#267FF5',
    },
    secondary: {
      main: '#B1B5C3',
    },
    orange: {
      main: '#F0B90B'
    },
    white: {
      main: '#FFFFFF'
    }
  },
})

export default theme
