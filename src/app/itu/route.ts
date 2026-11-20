import { NextResponse, type NextRequest } from "next/server";
import { appStoreLink, playStoreLink, siteConfig } from "@/lib/site";

/**
 * QR target for the ITU launch: sends each phone to its own store, everyone else to
 * the home page. 302 (not 301) so the destination can change after the QR is printed.
 */
export function GET(request: NextRequest) {
  const ua = request.headers.get("user-agent") ?? "";

  let destination = siteConfig.url;
  if (/android/i.test(ua)) {
    destination = playStoreLink("qr-itu", { utm_source: "qr", utm_medium: "poster" });
  } else if (/iphone|ipad|ipod/i.test(ua) || (/macintosh/i.test(ua) && /mobile/i.test(ua))) {
    destination = appStoreLink("qr-itu");
  }

  return NextResponse.redirect(destination, {
    status: 302,
    headers: { "Cache-Control": "no-store" },
  });
}
