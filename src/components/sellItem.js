import React, { Component } from 'react'

export default class SellItem extends Component {
    render() {
        let inputStyle = { 
            height:'30px',
            padding: '3px',
            margin: '0 0 0 0',
            width: '100%',
            display:'block', 
            border: 'none', 
            borderBottom: '.5px dotted black',
            gridColumn:'2/3'
        }
        let sellItem = this.props.sellItem
        let onClick = (e) => { 
            e.preventDefault();
            sellItem(e.target.parentElement[0].value,e.target.parentElement[1].value)
        }
        return (
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', backgroundColor: '#f8f8ff'}}>
                <form style={{ gridColumn:'2/3'}}>
                    <p style={{marginTop:'10px',padding:'5px'}}>Item Name:</p>
                    <input
                    type='text'
                    placeholder='Item'
                    name='Item'
                    onChange={this.onChange}
                    style = {inputStyle}
                    />
                    <p style={{marginTop:'10px'}}>Price:</p>
                    <input
                    type='text'
                    placeholder='Price'
                    name='Price'
                    style = {inputStyle}
                    />
                    <button onClick = { onClick } style = {{ margin:'10px 0px 20px 25%', padding:'3px', border: 'none', width: '40%'}} >Sell</button>
                </form>
            </div>
        )
    }
}
