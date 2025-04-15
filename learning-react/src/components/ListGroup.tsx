import { Fragment } from "react/";
function ListGroup() {
    const items = ["New York", "San Francisco", "Tokyo"];


    return (
        <>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <h1 className="text-5xl pl-4">List</h1>
            <ul className="divide-y divide-gray-200">
            {items.map(item => 
                <li>{item}</li>
            )}

            </ul>
        </div>
        </>
    );
}

export default ListGroup;