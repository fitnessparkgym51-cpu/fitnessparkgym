import { ImageResponse } from "next/og";
import {
  GYM_LOCALITY,
  GYM_NAME,
  GYM_PHONE_DISPLAY,
  GYM_REGION,
} from "@/lib/seo";

export const alt = `Fitness Park Gym - Best Gym in ${GYM_LOCALITY}, ${GYM_REGION}, Bangladesh`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const dynamic = "force-static";

const DARK = "#0a0a0a";
const AMBER = "#eab308";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: DARK,
          color: "#ffffff",
          position: "relative",
          fontFamily: "geist",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 24,
            backgroundColor: AMBER,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -140,
            top: -180,
            width: 520,
            height: 520,
            borderRadius: "50%",
            backgroundColor: "#eab30814",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
            padding: "96px 100px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 32,
              letterSpacing: 14,
              fontWeight: 400,
              color: AMBER,
            }}
          >
            {`${GYM_LOCALITY} - ${GYM_REGION} - BANGLADESH`}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 110,
              letterSpacing: 4,
              lineHeight: 1.02,
            }}
          >
            <span>{GYM_NAME.toUpperCase()}</span>
            <span style={{ color: AMBER }}>TRAIN HARD. STAY STRONG.</span>
          </div>
          <div
            style={{
              display: "flex",
              width: 220,
              height: 10,
              backgroundColor: AMBER,
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 38,
              color: "#d1d5db",
              letterSpacing: 2,
            }}
          >
            BEST GYM IN TONGI, GAZIPUR - BODYBUILDING & FITNESS CENTER
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#9ca3af",
              letterSpacing: 3,
            }}
          >
            {`OPEN DAILY 7:00 AM - 11:00 PM   |   CALL ${GYM_PHONE_DISPLAY}`}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}