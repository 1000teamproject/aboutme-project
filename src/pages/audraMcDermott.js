export default function audraMcDermottPage() {
    return (
      <div className='container'>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />

        <main>
          <div className='underline'>
            <h1 className='title'>Audra McDermott</h1>
          </div>
          <img
            className='pic'
            src='https://i.kym-cdn.com/photos/images/original/002/298/083/295.gifv'
            alt='ghibli gif'
          />

          <p className='description'>
            Hello! I'm a freshman at University of Colorado Boulder in the College of Applied Science and Engineering. I'm a Computer Science major, and I would like to focus in game development and computer animation. 
            In addition to focusing in game development, I am also planning on minoring in Mathematics or Applied Mathematics. 
          </p>

          <a className='button' href='/'>
            <p>return to main page</p>
          </a>
        </main>

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 60rem;
            margin: auto;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 3rem;
            color: #A62314;
          }

          .underline {
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }

          .description {
            line-height: 1.5;
            font-size: 1.2rem;
            color: #Bf4625;
            text-align: center;
          }

          .pic {
            height: 450px;
            width: 750px;
          }

          .button {
            /* margin: 0.5rem; */
            flex-basis: 45%;
            padding: 0.25rem;
            text-align: center;
            color: #A62314;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 2px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .button:hover,
          .button:focus,
          .button:active {
            color: #A62314;
            border-color: #A62314;
          }

          .button p {
            font-size: 1rem;
            font-weight: 600;
          }

          code {
            background: #A62314;
            border-radius: 3px;
            padding: 0.5rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
}
