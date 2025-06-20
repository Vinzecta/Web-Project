import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Pagination({className}) {
    return (
        <section className={className}>
            <ArrowBackIcon/>
            <ArrowForwardIcon />
        </section>
    );
}

export default Pagination;