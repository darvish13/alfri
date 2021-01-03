const Home = ({ text = 'A L F R I' }) => (
  <>
    <main
      style={{
        backgroundColor: '#f0f0f0',
        display: 'flex',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          color: '#303235',
          fontSize: '3em',
          fontFamily: 'Courier New',
        }}
      >
        {text}
      </h1>
    </main>
  </>
)

export default Home
