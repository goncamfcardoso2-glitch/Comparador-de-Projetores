from flask import Flask
app = Flask(_name_) # Tem de se chamar 'app'

@app.route('/api/deals')
def get_deals():
    return {"message": "Sucesso"}

# Podes manter o if _name_ == "_main_", 
# mas a Vercel ignora-o em produção
