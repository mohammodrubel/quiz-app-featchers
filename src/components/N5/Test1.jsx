"use client"
function Test1({ data }) {
    console.log(data)
    return (
        <div style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',padding:'8px 10px'}}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <b>{data[0]?.title}</b>
                <b>Time: {data[0]?.time}</b>
                <b>Score: {data[0]?.pass_score}</b>
            </div>
            {
                
            }
        </div>
    )
}

export default Test1