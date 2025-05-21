# Hermes Security Agent Website

A modern, responsive website for the Hermes Security Agent, built with Django and featuring advanced animations and interactions.

## Features

- Modern, responsive design
- Interactive animations and transitions
- Accessibility features
- SEO optimized
- Security best practices
- Performance optimized

## Local Development

1. Clone the repository:
```bash
git clone <repository-url>
cd hermes
```

2. Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

5. Run migrations:
```bash
python manage.py migrate
```

6. Start the development server:
```bash
python manage.py runserver
```

## Deployment

### Option 1: Heroku

1. Install the Heroku CLI
2. Login to Heroku:
```bash
heroku login
```

3. Create a new Heroku app:
```bash
heroku create your-app-name
```

4. Set environment variables:
```bash
heroku config:set SECRET_KEY=your-secret-key
heroku config:set DEBUG=False
heroku config:set ALLOWED_HOSTS=your-app-name.herokuapp.com
```

5. Deploy:
```bash
git push heroku main
```

### Option 2: DigitalOcean App Platform

1. Create a new app in DigitalOcean App Platform
2. Connect your GitHub repository
3. Configure environment variables
4. Deploy

### Option 3: Traditional VPS

1. Set up a VPS with Ubuntu/Debian
2. Install required packages:
```bash
sudo apt update
sudo apt install python3-pip python3-venv nginx
```

3. Clone the repository
4. Set up environment variables
5. Install dependencies
6. Configure Nginx
7. Set up SSL with Let's Encrypt
8. Run with Gunicorn

## Security Considerations

- Keep Django and all dependencies updated
- Use strong secret keys
- Enable HTTPS
- Configure proper CORS settings
- Regular security audits

## Performance Optimization

- Static files are served through WhiteNoise
- Images are optimized and lazy-loaded
- CSS and JavaScript are minified
- Browser caching is enabled
- Gzip compression is active

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
