export default function UploadMutation() {
    return (
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl font-bold">Upload Mutation</h1>
            <input type="file" className="border p-2 rounded" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Upload</button>
        </div>
    );
}