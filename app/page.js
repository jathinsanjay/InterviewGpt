
import SideNavBar from './components/nav';

export default function Home() {
  return (
    <main>
      <div className="flex">
        <SideNavBar active='home' /> {/* Pass the 'active' prop as 'home' */}
        <main className="flex-1 p-4">home</main>
      </div>
    </main>
  );
}
