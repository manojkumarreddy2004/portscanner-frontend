import { Component } from "react";
import { TextField, Button, Box, Typography } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

class PortScanner extends Component {
    state = {
        ports:'',
        host:"",
        results:[]
    }

    onChangePortsInput = event=>{
        this.setState({ports:event.target.value})
    }

    onChangeHostInput = event=>{
        this.setState({host:event.target.value})
    }

    handleSubmit = async event=>{
        event.preventDefault()
        const {ports,host} = this.state
        const url = `http://localhost:5555/scan?host=${host}&ports=${ports}`

        const response = await fetch(url)
        const data = await response.json()
        const {results} = data
        this.setState({results})
    }

    renderPortResults = results=>{
        return (
            <TableContainer component={Paper} sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
              <Typography variant="h6" align="center" sx={{ mt: 2 }}>
                Port Scan Results
              </Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center"><strong>Port</strong></TableCell>
                    <TableCell align="center"><strong>Status</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {results.map((result, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">{result.port}</TableCell>
                      <TableCell align="center" sx={{ color: result.status === 'open' ? 'green' : 'red' }}>
                        {result.status}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )
    }

    render (){
        const {host, ports, results} = this.state
        return (<><Box
        sx={{
          maxWidth: 400,
          margin: 'auto',
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" textAlign="center">
          Port Scanner
        </Typography>
        <form onSubmit ={this.handleSubmit}>
          <TextField
            label="Host"
            variant="outlined"
            fullWidth
            value={host}
            onChange={this.onChangeHostInput}
            placeholder="Enter host (e.g., 127.0.0.1)"
            sx={{marginBottom:2}}
          />
          <TextField
            label="Ports"
            variant="outlined"
            fullWidth
            value={ports}
            sx={{marginBottom:2}}
            onChange={this.onChangePortsInput}
            placeholder="Enter ports (comma-separated)"
          />
          {false && (
            <Typography color="error" textAlign="center">
              {"enter correct input details"}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
          >
            Scan
          </Button>
        </form>
      </Box>
      {results.length!==0 && this.renderPortResults(results)}
      </>
    )
    }
    
}

export default PortScanner