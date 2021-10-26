import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import {CardActionArea} from '@mui/material';

export default function userCard ( {account} ){

    return (
        <div>
            <Card>
                <CardActionArea >
                    <CardHeader title={account.Account}/>
                        <CardContent>
                            Status: {account.status}
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

