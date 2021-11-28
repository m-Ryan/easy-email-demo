import { MjmlToJson } from "easy-email-core";
import { IEmailTemplate } from "easy-email-editor";
import { Uploader } from "../urils/Uploader";


const uploader = new Uploader(async () => (''), {
  autoUpload: false,
  limit: 1,
  accept: '*'
})


export function useImportTemplate() {

  const importTemplate = async () => {
    const [file] = await uploader.chooseFile();
    const reader = new FileReader();
    return new Promise<[string, IEmailTemplate['content']]>((resolve, reject) => {
      reader.onload = function (evt) {
        if (!evt.target) {
          reject();
          return;
        }
        try {
          const pageData = MjmlToJson(evt.target.result as any);
          resolve([file.name, pageData]);
        } catch (error) {
          reject()
        }
      };
      reader.readAsText(file);
    })

  }

  return { importTemplate }
}