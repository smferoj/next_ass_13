import { NextResponse } from 'next/server';

export default function RedirectPage() {
  return NextResponse.redirect('/destination'); 
}