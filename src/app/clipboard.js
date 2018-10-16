export function clipboard() {
    navigator.permissions.query({
        name: 'clipboard-read'
    }).then(permissionStatus => {
        // Will be 'granted', 'denied' or 'prompt':
        alert(permissionStatus.state);

        // Listen for changes to the permission state
        permissionStatus.onchange = () => {
            console.log(permissionStatus.state);
        };
    })

    document.addEventListener('copy', async e => {
        let text;
        if (navigator.clipboard) {
          text = await navigator.clipboard.readText()
        }
        else {
          text = e.clipboardData.getData('text/plain');
        }
        console.log('Got pasted text: ', text);
      });
}