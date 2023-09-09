export default function Comments({data}) {
    console.log(data);
    return(
        <div class="card card-compact w-96 bg-base-100 shadow-xl m-3">
            <div class="card-body">
                <h2 class="card-title">Name: {data.name}</h2>
                <p>Email: {data.email}</p>
                <hr />
                <p>{data.body}</p>
            </div>
        </div>
    )
}