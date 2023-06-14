
export default async function handler(req, res) {
    if (req.method === 'GET') {
        // Handle GET request
        res.status(200).json({ message: 'Handling GET request' });
    } else if (req.method === 'POST') {
        // Handle POST request
        res.status(201).json({ message: 'Handling POST request' });
    } else if (req.method === 'PUT') {
        // Handle PUT request
        res.status(200).json({ message: 'Handling PUT request' });
    } else if (req.method === 'DELETE') {
        // Handle DELETE request
        res.status(200).json({ message: 'Handling DELETE request' });
    } else {
        // Handle other HTTP methods
        res.status(405).end();
    }
}