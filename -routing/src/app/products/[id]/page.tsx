export default async function Product({params} : {params: {id: string}}) {
    const name = params.id;
        return (
            <div>
            <h1>Product</h1>
            <p>This is the product page: {name}</p>
            
            </div>
        );
        }
