window.NuiMessage = (msg) => {
  window.SendNuiMessage(JSON.stringify(msg));
};

RegisterCommand('nuitest', (source, args, rawCommand) => {
  SetNuiFocus(true, true);
  NuiMessage({type: 'adminStore/ENABLE', path: '/admin'});
}, false);

RegisterCommand('unsetfocus', (source, args, rawCommand) => {
  SetNuiFocus(false, false);
}, false);

window.NuiCallback('unsetFocus', (state) => {
  window.SetNuiFocus(false, false);
});