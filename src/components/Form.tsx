import { useState } from "react";

type FormProps = {
    onSubmit: (name: string) => void;
};

export const Form = ({ onSubmit }: FormProps) => {
    const [name, setName] = useState('');
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(name);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    )
}