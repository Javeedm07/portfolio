export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} MirrorFolio. All rights reserved.</p>
        <p className="mt-2">
          Designed to mirror a{' '}
          <a
            href="https://namr.framer.website/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            beautiful template
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
