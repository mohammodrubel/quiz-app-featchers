
import Link from 'next/link';


const Test1 = async () => {
    const res = await fetch(`https://jlpt.mazii.net/api/jlpt/667549917566ad2c88b909e7`);
    const data = await res.json();
    const setExamData = data[0];

    if (!setExamData) {
        return <div>Loading...</div>;
    }
    const id = 1

    return (
        <Link href={`/exam/test1`}>
        <div style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', padding: '8px 10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <b style={{ color: 'gray' }}>{setExamData.title}</b>
                <b style={{ color: 'gray' }}>Begin <i className="fa-solid fa-arrow-right"></i></b>
            </div>
        </div>
        </Link>
    );
}

export default Test1;
