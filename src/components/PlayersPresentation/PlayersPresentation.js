import React from 'react'
import './PlayersPresent.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import { useContext, useState } from 'react'
import { ThemeContext } from '../themcolor/ThemeContext'
import { Icon, CardTitle, Row, Col, Card, Container } from 'react-materialize'
import { Link } from 'react-router-dom'
import Detail from '../Detail/Detail'

export default function PlayersPresentation({ players }) {
  const [player, setPlayer] = useState([])
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <Container style={{ marginTop: 20 }} >
      <Row style={{
      }} >
        {players.map((player) => (
          < Col s={4} >
            <Card style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color
            }}
              header={<CardTitle image={player.img} reveal waves="light" />}
              reveal={<p>{player.info}</p>}
              revealIcon={<Icon>more_vert</Icon>}
              title={player.name} >
              <p>
                {/* <button onClick={() => { setPlayer(player) }} style={{ marginRight: 30 }}>
                  <a href='#popup1' id='openPopUp'>Detail</a>
                </button> */}
                <Link to={`detail/${player.id}`}>
                  <p><button>Detail</button></p>
                </Link>

                
              </p>

            </Card>

          </Col>
        ))}

      </Row>
      {/* <div id='popup1' className='overplay'>
                <div className='popup'>
                  <img src={player.img} />
                  <h2>{player.name}</h2>
                  <a className='close' href='#'>&times;</a>
                  <div className='content'>
                    {player.info}
                  </div>
                </div>
              </div> */}
    </Container>

  )
}
