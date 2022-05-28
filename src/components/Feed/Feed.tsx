import React          from 'react';
import Message        from '../Message/Message';


const Feed: React.FC<{ name:string, 
                       messages:any}> = ({ name, messages}) => {



    return (
        <div className='feed-container'>
            <div className="feed">
                {messages.map(
                    (message? :any, i? :any) => 
                        
                        <div key={i}>
                           <Message message={message} 
                                    name={name} /> 
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Feed;