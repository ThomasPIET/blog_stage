export default function Article({ title, content }) {
  return (
    <div className=" p-20 m-20">
      <h2 className="text-3xl text-center">{title}</h2>
      <p className="flex text-center justify-center">{content}</p>
    </div>
  );
}