

export default function GeneralCockPitSettings() {
  return (
      <form className="border border-gray-100 mt-2 px-4">
        <h2>Document Retrieval</h2>
        <p>Configure how documents are loaded and filtered</p>

        <div className="my-2">
          <div className="flex flex-col">
            <label htmlFor="">Show Recent eDocuments(days)</label>
            <input
              type="text"
              defaultValue="30"
              className="w-22 rounded-md bg-gray-300"
            />
            <small>Only load documents created within the last N days</small>
          </div>

          <div className="flex flex-col">
            <label htmlFor="">Auto-refresh</label>
            <small>
              Automatically refresh the document list every 5 minutes
            </small>
          </div>

          <div className="flex flex-col">
            <label htmlFor="">Documents Per Page</label>
            <input
              className="w-22 bg-gray-300 rounded-md"
              type="number"
              defaultValue={50}
            />
          </div>
        </div>

        <div className="flex gap-3 justify-end mb-2">
          <button className="text-black bg-white rounded-md p-1 border border-gray-200">
            Cancel
          </button>
          <button className="bg-black text-white rounded-md px-1">
            Save Settings
          </button>
        </div>
      </form>
  )
}
