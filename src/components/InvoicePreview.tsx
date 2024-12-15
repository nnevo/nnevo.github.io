import { Theme } from '../types/Theme';

interface InvoicePreviewProps {
  theme: Theme;
}

export const InvoicePreview = ({ theme }: InvoicePreviewProps) => {
  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        padding: '2rem',
        borderRadius: '8px',
        maxWidth: '800px',
        margin: '0 auto',
        fontFamily: theme.fontFamily,
      }}
    >
      <div style={{ color: theme.primaryColor }}>
        <h2>INVOICE</h2>
        <div style={{ borderBottom: `2px solid ${theme.accentColor}` }}></div>
      </div>
      
      <div style={{ marginTop: '2rem', color: theme.secondaryColor }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <h3>From</h3>
            <p>Your Company Name</p>
            <p>123 Business Street</p>
            <p>City, Country</p>
          </div>
          <div>
            <h3>To</h3>
            <p>Client Name</p>
            <p>456 Client Avenue</p>
            <p>City, Country</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: theme.primaryColor, color: 'white' }}>
              <th style={{ padding: '1rem' }}>Item</th>
              <th style={{ padding: '1rem' }}>Quantity</th>
              <th style={{ padding: '1rem' }}>Price</th>
              <th style={{ padding: '1rem' }}>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: `1px solid ${theme.secondaryColor}` }}>
              <td style={{ padding: '1rem' }}>Service A</td>
              <td style={{ padding: '1rem' }}>1</td>
              <td style={{ padding: '1rem' }}>$100.00</td>
              <td style={{ padding: '1rem' }}>$100.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}; 