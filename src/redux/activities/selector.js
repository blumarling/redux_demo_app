// selettore - questo è il mapStateToProps, una funzione che legge tutto lo state
// dal connect (nel componente che lo necessita) e
// torna un oggetto customizzato sulle nostre esigenze

export const getAllResults = state => {
  return {
    activities: state.activities
  }
}