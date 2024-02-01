import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Nathan Levitt";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        <svg
          width="150"
          height="150"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 23.3333C0 10.4467 10.4467 0 23.3333 0H76.6667C89.5533 0 100 10.4467 100 23.3333V76.6667C100 89.5533 89.5533 100 76.6667 100H23.3333C10.4467 100 0 89.5533 0 76.6667V23.3333Z"
            fill="white"
          />
          <path
            d="M27.6053 74.1333C25.0089 74.1333 23.164 72.7708 22.0707 70.0456C21.0458 67.3204 20.5333 62.9601 20.5333 56.9648C20.5333 48.108 21.7974 39.694 24.3256 31.7229C24.9405 29.7471 25.9313 28.3164 27.2979 27.4307C28.7328 26.4769 30.7143 26 33.2424 26C34.609 26 35.5656 26.1703 36.1122 26.511C36.6589 26.8516 36.9322 27.4988 36.9322 28.4527C36.9322 29.5427 36.4197 31.9954 35.3948 35.8106C34.7115 38.5358 34.1649 40.9203 33.7549 42.9642C33.3449 45.0081 33.0033 47.5289 32.73 50.5265C34.9848 44.6674 37.513 39.8984 40.3144 36.2194C43.1159 32.5404 45.849 29.9174 48.5139 28.3505C51.247 26.7835 53.741 26 55.9958 26C60.4372 26 62.6579 28.2142 62.6579 32.6426C62.6579 35.2996 61.9062 40.1028 60.403 47.0519C59.1048 52.9792 58.4557 56.8966 58.4557 58.8042C58.4557 61.5294 59.4464 62.892 61.4279 62.892C62.7945 62.892 64.4002 62.0745 66.2451 60.4394C68.1583 58.7361 70.6865 56.011 73.8296 52.2638C74.6495 51.31 75.5719 50.8331 76.5969 50.8331C77.4851 50.8331 78.1684 51.2419 78.6467 52.0595C79.1934 52.877 79.4667 54.0011 79.4667 55.4318C79.4667 58.157 78.8176 60.269 77.5193 61.7679C74.5812 65.3787 71.4039 68.3423 67.9875 70.6587C64.6394 72.9751 60.813 74.1333 56.5083 74.1333C53.0235 74.1333 50.3929 73.1455 48.6163 71.1697C46.8398 69.1258 45.9515 66.1963 45.9515 62.381C45.9515 60.4734 46.4298 57.067 47.3864 52.1616C48.2747 47.8695 48.7188 44.9059 48.7188 43.2708C48.7188 42.1807 48.343 41.6357 47.5914 41.6357C46.7032 41.6357 45.4391 42.7939 43.7992 45.1103C42.2276 47.3585 40.5878 50.3562 38.8795 54.1033C37.2397 57.8504 35.9072 61.8019 34.8823 65.9578C34.1307 69.1599 33.2424 71.34 32.2175 72.4982C31.2609 73.5883 29.7235 74.1333 27.6053 74.1333Z"
            fill="black"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}