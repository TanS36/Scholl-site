import React, { useState } from 'react';

interface DocumentRequest {
  id: number;
  documentName: string;
  status: 'In Review' | 'Ready' | 'Denied';
}

const RequestDocumentsPage: React.FC = () => {
  const [documentRequests, setDocumentRequests] = useState<DocumentRequest[]>([
    { id: 1, documentName: 'Transcript', status: 'In Review' },
    { id: 2, documentName: 'Enrollment Certificate', status: 'Ready' },
    { id: 3, documentName: 'Graduation Certificate', status: 'Denied' },
  ]);

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-blue-900 mb-4">Requested Documents</h1>
        {documentRequests.length === 0 ? (
          <p className="text-blue-700">No documents requested yet.</p>
        ) : (
          <ul className="space-y-4">
            {documentRequests.map((request) => (
              <li key={request.id} className="flex justify-between items-center border-b py-2">
                <span className="text-blue-900 font-semibold">{request.documentName}</span>
                <span
                  className={`px-2 py-1 rounded ${
                    request.status === 'Ready'
                      ? 'bg-green-500 text-white'
                      : request.status === 'Denied'
                      ? 'bg-red-500 text-white'
                      : 'bg-yellow-500 text-white'
                  }`}
                >
                  {request.status}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RequestDocumentsPage;

