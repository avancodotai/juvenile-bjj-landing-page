import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'BJJ for Kids at Next School';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: 'white',
        }}
      >
        <div style={{ marginBottom: '20px' }}>🥋</div>
        <div style={{ fontSize: 48, fontWeight: 'bold' }}>BJJ for Kids</div>
      </div>
    ),
    {
      ...size,
    }
  );
}
