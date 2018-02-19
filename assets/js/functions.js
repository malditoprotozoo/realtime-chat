const createDialog = () => {
  $('#dialog').dialog({
    autoOpen: true,
    show: {
      effect: 'bounce',
      duration: 500
    },
    hide: {
      effect: 'drop',
      duration: 1000
    }
  });
};