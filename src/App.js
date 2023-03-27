import { read, utils } from "xlsx";

export default function App() {
  const readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = utils.sheet_to_json(worksheet);
        console.log(json);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  return (
    <div className="App">
      <form>
        <label htmlFor="upload">Upload File</label>
        <input
          type="file"
          name="upload"
          id="upload"
          onChange={readUploadFile}
        />
      </form>
    </div>
  );
}
