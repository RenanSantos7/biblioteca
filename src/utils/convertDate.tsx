export default function convertDate(date: string | [number, number, number]) {
    let dateObj: Date

	if (typeof date === 'string') {
		dateObj = new Date(date);
    } else {
        dateObj = new Date(...date)
    }
    
    const dateY = dateObj.getFullYear();
    const dateM = String(dateObj.getMonth() + 1).padStart(2, '0');
    const dateD = String(dateObj.getDate()).padStart(2, '0');

    return `${dateD}/${dateM}/${dateY}`;
}
