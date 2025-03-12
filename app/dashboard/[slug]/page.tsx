//export default function Page({ params }: { params: { slug: string } }) {
  export default async function Page( { params } ) {
    
    //asynchronous access of 'params.slug'
    const { slug } = await params;
    
    return <div>My Post: {slug}</div>
  }
