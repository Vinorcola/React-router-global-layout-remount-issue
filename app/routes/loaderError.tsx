
export function loader() {
    throw new Error("Error")
}

export default function loaderError() {
    return (
        <h1 className="text-4xl text-center">Loader page</h1>
    )
}
