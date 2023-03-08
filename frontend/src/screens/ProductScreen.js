import { useParams } from 'react-router-dom';

function ProductScreen() {
  // useParams is a hook to get the slug from url
  const params = useParams();
  const { slug } = params;
  return (
    <>
      <h1>{slug}</h1>
    </>
  );
}
export default ProductScreen;
