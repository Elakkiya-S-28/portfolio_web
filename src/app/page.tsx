// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <h1 className="text-4xl font-bold">Welcome to the Home Pagews</h1>
//     </main>
//   );
// } 
import Navbar from '../Navigation'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20 px-4">
        <h1 className="text-3xl font-bold">Welcome to MyApp</h1>
        <p className="mt-2 text-gray-600">Your Next.js app with Tailwind navigation</p>
      </main>
    </>
  );
}
