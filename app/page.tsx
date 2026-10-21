"use client";

import { FormEvent, useState } from "react";

const diapers = [
  {
    name: "Pampers Premium Care",
    image:
      "https://images.ctfassets.net/t4odg9b4leib/1n6IVdiwL7PKGgf0bBWzRj/df5863d9b0fd0839a875a16a63e48ba6/image_231.png?fm=avif&w=600&q=85",
  },
  {
    name: "Huggies Supreme Care",
    image:
      "https://i5.walmartimages.com/asr/79f5c7cf-614c-43af-b7a7-ec76ca386ca5.b2f939c6b8572bf74d1370523f1b4a57.jpeg",
  },
  {
    name: "Pampers Confort Sec",
    image:
      "https://images.ctfassets.net/t4odg9b4leib/2jrmDFihpe3I8ZojEWaAKU/8bb450e29a96a525327288e86e2695d6/00030772204870_C1L1__9_.png?fm=avif&w=600&q=85",
  },
  {
    name: "Pampers Pants",
    image:
      "https://images.ctfassets.net/t4odg9b4leib/1JOHeiVOCrqTepDFp9gqfv/d522e44e2ef492520a2ed1ff7e6e8d89/00030772204870_C1L1__10_.png?fm=avif&w=600&q=85",
  },
  {
    name: "MamyPoko Fralda-Calça",
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Pom Pom Protek",
    image: "https://pompom.com.br/wp-content/uploads/2023/10/home-protek-novo_.png",
  },
  {
    name: "Babysec Ultra",
    image:
      "https://www.babysec.com.br/assets/uploads/product/image/3f365-m-min.png",
  },
];

const diaperSizes = ["M", "G", "XG"];

const mimos = [
  {
    category: "Higiene e banho",
    name: "Sabonete líquido neutro",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=480&q=80",
  },
  {
    category: "Higiene e banho",
    name: "Hidratante corporal",
    image:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=480&q=80",
  },
  {
    category: "Higiene e banho",
    name: "Óleo corporal",
    image:
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=480&q=80",
  },
  {
    category: "Higiene e banho",
    name: "Colônia infantil sem álcool",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=480&q=80",
  },
  {
    category: "Roupinhas",
    name: "Body (manga curta ou longa)",
    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=480&q=80",
  },
  {
    category: "Roupinhas",
    name: "Macacão",
    image:
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=480&q=80",
  },
  {
    category: "Roupinhas",
    name: "Vestidinho",
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=480&q=80",
  },
];

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Ch%C3%A1cara+Bela+Vista+Natal%2C+Travessa+Moema+Tinoco+da+Cunha+Lima%2C+180%2C+Paju%C3%A7ara%2C+Natal+-+RN%2C+59122-335";

export default function Home() {
  const [selectedDiaper, setSelectedDiaper] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedMimo, setSelectedMimo] = useState("");
  const [selectionError, setSelectionError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!selectedMimo) {
      setSelectionError("Escolha um mimo para finalizar sua confirmação.");
      document.getElementById("mimos")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (!selectedDiaper || !selectedSize) {
      setSelectionError("Escolha uma fralda e um tamanho para finalizar sua confirmação.");
      document.getElementById("fraldas")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name")).trim();
    const phone = String(formData.get("phone")).trim();
    const mimo = mimos[Number(selectedMimo)];
    const message = [
      "Oi! Quero confirmar minha presença no Chá da Helena.",
      `Nome: ${name}`,
      `Telefone para contato: ${phone}`,
      `Fralda: ${selectedDiaper}, tamanho ${selectedSize}`,
      `Mimo: ${mimo.category} - ${mimo.name}`,
    ].join("\n");

    window.open(
      `https://wa.me/5584988420575?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="Chá da Helena, início">
          Helena <span>♥</span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#fraldas">Fraldas</a>
          <a href="#mimos">Mimos</a>
          <a href="#evento">O encontro</a>
          <a className="nav-cta" href="#confirmar">Confirmar presença <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-rule" /> UM NOVO AMOR ESTÁ A CAMINHO</p>
          <h1>Chá da <span>Helena</span></h1>
          <p className="hero-description">
            Um pedacinho de alegria está chegando. Venha celebrar com a gente
            essa espera tão bonita e encher de carinho o mundo da Helena.
          </p>
          <a className="primary-link" href="#fraldas">Escolher presentes <span aria-hidden="true">↓</span></a>
          <p className="hero-date">21 DE NOVEMBRO <span>·</span> NATAL, RN</p>
        </div>
        <div className="hero-art" aria-label="Convite para celebrar a chegada da Helena">
          <div className="art-topline"><span>um dia especial</span><span>21 / 11</span></div>
          <div className="art-center">
            <span className="art-sparkle" aria-hidden="true">✳</span>
            <span className="art-script">com amor,</span>
            <span className="art-name">Helena</span>
            <span className="art-underline" aria-hidden="true" />
            <span className="art-bottom">ESTAMOS À SUA ESPERA</span>
          </div>
          <span className="art-corner art-corner-left" aria-hidden="true">✳</span>
          <span className="art-corner art-corner-right" aria-hidden="true">✳</span>
        </div>
        <a href="#fraldas" className="scroll-cue" aria-label="Rolar para a lista de presentes">↓</a>
      </section>

      <section className="diapers section-pad" id="fraldas">
        <div className="section-heading">
          <p className="eyebrow"><span className="eyebrow-rule" /> UMA FRALDA PARA A HELENA</p>
          <h2>Um cuidado para cada<br /><em>nova descoberta.</em></h2>
          <p className="section-intro">Escolha um modelo de fralda e o tamanho M, G ou XG. As fotos são ilustrativas.</p>
        </div>

        {selectionError && !selectedDiaper && <p className="selection-error" role="alert">{selectionError}</p>}
        <div className="diaper-grid" role="radiogroup" aria-label="Escolha um modelo de fralda">
          {diapers.map((diaper) => (
            <label className={`diaper-option${selectedDiaper === diaper.name ? " is-selected" : ""}`} key={diaper.name}>
              <input
                type="radio"
                name="diaper"
                value={diaper.name}
                checked={selectedDiaper === diaper.name}
                onChange={() => {
                  setSelectedDiaper(diaper.name);
                  setSelectionError("");
                }}
              />
              <span className="diaper-photo"><img src={diaper.image} alt={`Imagem ilustrativa da fralda ${diaper.name}`} loading="lazy" decoding="async" /></span>
              <span className="diaper-name">{diaper.name}</span>
              <span className="diaper-caption">IMAGEM ILUSTRATIVA</span>
              <span className="gift-check" aria-hidden="true">{selectedDiaper === diaper.name ? "✓" : "+"}</span>
            </label>
          ))}
        </div>

        <div className="size-picker">
          <span className="size-label" id="size-label">TAMANHO</span>
          <div className="size-options" role="radiogroup" aria-labelledby="size-label">
            {diaperSizes.map((size) => (
              <label className={`size-option${selectedSize === size ? " is-selected" : ""}`} key={size}>
                <input
                  type="radio"
                  name="diaper-size"
                  value={size}
                  checked={selectedSize === size}
                  onChange={() => {
                    setSelectedSize(size);
                    setSelectionError("");
                  }}
                />
                {size}
              </label>
            ))}
          </div>
        </div>
        {selectionError && selectedDiaper && <p className="selection-error" role="alert">{selectionError}</p>}
      </section>

      <section className="mimos section-pad" id="mimos">
        <div className="section-heading">
          <p className="eyebrow"><span className="eyebrow-rule" /> E TAMBÉM UM MIMO</p>
          <h2>Um carinho em forma<br /><em>de presente.</em></h2>
          <p className="section-intro">Além da fralda, escolha um mimo entre higiene e banho ou roupinhas.</p>
        </div>
        {selectionError && !selectedMimo && <p className="selection-error" role="alert">{selectionError}</p>}
        <div className="mimo-groups">
          {["Higiene e banho", "Roupinhas"].map((category) => (
            <div className="mimo-group" key={category}>
              <h3>{category}</h3>
              <div className="mimo-grid" role="radiogroup" aria-label={`Escolha um mimo: ${category}`}>
                {mimos.map((mimo, index) => mimo.category === category && (
                  <label className={`mimo-option${selectedMimo === String(index) ? " is-selected" : ""}`} key={mimo.name}>
                    <input
                      type="radio"
                      name="mimo"
                      value={index}
                      checked={selectedMimo === String(index)}
                      onChange={(event) => {
                        setSelectedMimo(event.target.value);
                        setSelectionError("");
                      }}
                    />
                    <span className="mimo-photo"><img src={mimo.image} alt={`Imagem ilustrativa: ${mimo.name}`} loading="lazy" decoding="async" /></span>
                    <span className="mimo-name">{mimo.name}</span>
                    <span className="mimo-caption">IMAGEM ILUSTRATIVA</span>
                    <span className="gift-check" aria-hidden="true">{selectedMimo === String(index) ? "✓" : "+"}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        {selectionError && selectedMimo && <p className="selection-error" role="alert">{selectionError}</p>}
      </section>

      <section className="event section-pad" id="evento">
        <div className="event-heading">
          <p className="eyebrow"><span className="eyebrow-rule" /> VAMOS CELEBRAR JUNTOS</p>
          <h2>Guarde essa<br /><em>tarde no coração.</em></h2>
        </div>
        <div className="event-details">
          <div className="event-detail">
            <span className="detail-index">01</span>
            <div><span className="detail-label">QUANDO</span><p>21 de novembro<br />às 15 horas</p></div>
          </div>
          <div className="event-detail">
            <span className="detail-index">02</span>
            <div><span className="detail-label">ONDE</span><p>Chácara Bela Vista Natal</p></div>
          </div>
          <a className="event-detail address-detail" href={mapUrl} target="_blank" rel="noreferrer">
            <span className="detail-index">03</span>
            <div><span className="detail-label">ENDEREÇO <span className="map-hint">ABRIR NO MAPA ↗</span></span><p>Travessa Moema Tinoco da Cunha Lima, 180<br />Pajuçara, Natal - RN, 59122-335</p></div>
          </a>
        </div>
      </section>

      <section className="rsvp section-pad" id="confirmar">
        <div className="rsvp-copy">
          <p className="eyebrow"><span className="eyebrow-rule" /> SUA PRESENÇA É NOSSO PRESENTE</p>
          <h2>Esperamos você,<br /><em>de todo coração.</em></h2>
          <p>Conte pra gente quem vem e quais presentes escolheu. Sua confirmação será preparada no WhatsApp.</p>
        </div>
        <form className="rsvp-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Seu nome</label>
          <input id="name" name="name" type="text" autoComplete="name" placeholder="Como podemos te chamar?" required />
          <label htmlFor="phone">Telefone para contato</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(84) 99999-9999" required />
          <button className="submit-button" type="submit">Confirmar fralda e mimo <span aria-hidden="true">↗</span></button>
          <p className="form-note">O WhatsApp abrirá com sua mensagem pronta para enviar.</p>
        </form>
      </section>

      <footer className="site-footer">
        <a className="wordmark" href="#inicio">Helena <span>♥</span></a>
        <span>Feito com carinho para celebrar uma nova vida.</span>
        <a href="#inicio" className="back-top">VOLTAR AO TOPO ↑</a>
      </footer>
    </main>
  );
}