import React from 'react'
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import './App.css'

const FlashCard = ({ word, description, show, onClick }) => (
    <Card className="card" raise={true}>
      <CardContent>
        <Typography align="center" type="headline" className="title" gutterBottom={true}>
          {word}
   </Typography>
        <Typography type="alignCenter" component="p" style={{ display: show ? 'block' : 'none' }}>
          {description}
   </Typography>
      </CardContent>
      <CardActions>
        <Button dense onClick={onClick}>Learn More</Button>
      </CardActions>
    </Card>
)

export default FlashCard
