import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Američke Vize - Pomoć pri Dobijanju US Vize</title>
        <meta name="description" content="Dobijte pomoć pri apliciranju za US vizu. Nudimo podršku na engleskom i lokalnim jezicima." />
        <meta name="keywords" content="US viza, pomoć pri vizama, Bosna, Srbija, podrška na engleskom" />
        <meta name="author" content="Spiculus89" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">Američke Vize</h1>
        <p>Vaš vodič za dobijanje američke vize</p>
      </header>

      <main className="p-6">
        <section className="bg-gray-100 p-6 text-center">
          <h2 className="text-2xl font-semibold">Dobrodošli</h2>
          <p>Bilo da planirate turističko putovanje, sezonski rad, ili posjetu prijateljima i rodbini u SAD, mi smo ovdje da vam pomognemo!</p>
        </section>

        <section className="my-6 p-6">
          <h2 className="text-2xl font-semibold">Naše Usluge</h2>
          <ul className="list-disc list-inside">
            <li>Pomoć pri popunjavanju aplikacije za vizu</li>
            <li>Priprema za intervju u ambasadi</li>
            <li>Prevodilačke usluge i pomoć pri dokumentaciji</li>
            <li>Konsultacije za odabir odgovarajuće vize</li>
          </ul>
        </section>

        <section className="my-6 p-6 bg-gray-100">
          <h2 className="text-2xl font-semibold">Kako Funkcioniše Proces?</h2>
          <ol className="list-decimal list-inside">
            <li>Kontaktirajte nas putem forme ili telefona</li>
            <li>Dogovorite konsultacije</li>
            <li>Prikupite potrebnu dokumentaciju</li>
            <li>Mi ćemo vam pomoći pri popunjavanju aplikacije</li>
            <li>Pripremite se za intervju uz našu pomoć</li>
            <li>Odobrenje vize i planiranje vašeg putovanja</li>
          </ol>
        </section>

        <section className="my-6 p-6">
          <h2 className="text-2xl font-semibold">Vrste Viza</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 border border-gray-300 rounded">
              <h3 className="text-xl font-bold">Turistička Viza (B-2)</h3>
              <p>Za one koji planiraju turističko putovanje u SAD.</p>
            </div>
            <div className="bg-white p-4 border border-gray-300 rounded">
              <h3 className="text-xl font-bold">Radna Viza (H-2B)</h3>
              <p>Za sezonske radnike u poljoprivredi, građevinarstvu i drugim industrijama.</p>
            </div>
            <div className="bg-white p-4 border border-gray-300 rounded">
              <h3 className="text-xl font-bold">Poslovna Viza (B-1)</h3>
              <p>Za poslovne sastanke, konferencije i druge poslovne svrhe.</p>
            </div>
            <div className="bg-white p-4 border border-gray-300 rounded">
              <h3 className="text-xl font-bold">Porodična Viza (K-1)</h3>
              <p>Za one koji planiraju posjetiti svoju porodicu u SAD.</p>
            </div>
          </div>
        </section>

        <section className="my-6 p-6 bg-gray-100">
          <h2 className="text-2xl font-semibold">Iskustva Naših Klijenata</h2>
          <blockquote className="border-l-4 border-blue-600 pl-4">
            <p>"Uz pomoć ovog servisa, uspješno sam dobio turističku vizu za SAD. Sve preporuke!" - Ivan P.</p>
          </blockquote>
          <blockquote className="border-l-4 border-blue-600 pl-4 mt-4">
            <p>"Profesionalni i pouzdani, olakšali su mi cijeli proces aplikacije za radnu vizu." - Ana M.</p>
          </blockquote>
        </section>

        <section className="my-6 p-6">
          <h2 className="text-2xl font-semibold">Česta Pitanja</h2>
          <details className="border border-gray-300 p-4 mb-2">
            <summary className="font-semibold">Koliko traje proces dobijanja vize?</summary>
            <p>Proces može trajati od nekoliko sedmica do nekoliko mjeseci, ovisno o vrsti vize i vašem slučaju.</p>
          </details>
          <details className="border border-gray-300 p-4 mb-2">
            <summary className="font-semibold">Koje dokumente trebam pripremiti?</summary>
            <p>Potrebna dokumentacija ovisi o vrsti vize. Kontaktirajte nas za detalje.</p>
          </details>
          <details className="border border-gray-300 p-4 mb-2">
            <summary className="font-semibold">Da li garantujete dobijanje vize?</summary>
            <p>Ne možemo garantovati dobijanje vize, ali ćemo učiniti sve da vam pomognemo i povećamo vaše šanse za uspjeh.</p>
          </details>
        </section>

        <section className="my-6 p-6 bg-gray-100">
          <h2 className="text-2xl font-semibold">Kontaktirajte Nas</h2>
          <form className="flex flex-col space-y-4" action="mailto:your-email@example.com" method="POST" enctype="multipart/form-data">
            <input className="p-2 border border-gray-300" type="text" name="name" placeholder="Vaše Ime" required />
            <input className="p-2 border border-gray-300" type="email" name="email" placeholder="Vaš Email" required />
            <textarea className="p-2 border border-gray-300" name="message" placeholder="Vaša Poruka" required></textarea>
            <button className="p-2 bg-blue-600 text-white" type="submit">Pošalji</button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>Razvio Spiculus89 | <a href="https://github.com/Spiculus89" className="text-blue-400">GitHub</a></p>
      </footer>
    </div>
  )
}
