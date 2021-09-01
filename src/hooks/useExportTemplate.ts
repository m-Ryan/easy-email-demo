

export function useExportTemplate() {

  const exportTemplate = (name: string, page: string,) => {
    var data = new Blob([page], { type: 'text/html' });

    const downloadUrl = window.URL.createObjectURL(data);

    const a = document.createElement('a');
    const event = new MouseEvent('click');
    a.download = name;
    a.href = downloadUrl;
    a.dispatchEvent(event);
  }

  return { exportTemplate }
}