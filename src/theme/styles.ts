export default {
  global: () => {
    return {
      'html, body': {
        fontSize: '14',
        color: 'black',
      },

      '*::-webkit-scrollbar': {
        width: '6px',
        height: '6px',
      },
      '*::-webkit-scrollbar-button': {
        display: 'none',
      },
      '*::-webkit-scrollbar-track': {
        borderRadius: '10px',
        bg: 'transparent',
      },
      '*::-webkit-scrollbar-thumb': {
        borderRadius: '10px',
        // bg: 'green.200',
        boxShadow: 'inset 0 0 6px rgba(0, 0, 0, .3)',
      },
      '*::-webkit-scrollbar-corner': {
        bg: 'transparent',
      },
      '*': {
        // scrollbarColor: 'var(--chakra-colors-green-200)',
        scrollbarWidth: 'thin',
      },
    }
  },
}
