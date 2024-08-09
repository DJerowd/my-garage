import React, { useState } from 'react';
import properties from '../../data/properties.json';
import './Styles.css';

function List({ personagemId }) {
  const [garagem, setGaragem] = useState({
    agency: '',
    arena: '',
    autoShop: '',
    bailEnforcement: '',
    bunker: '',
    casinoPenthouse: '',
    executiveOfficeGarage1: '',
    executiveOfficeGarage2: '',
    executiveOfficeGarage3: '',
    garage1: '',
    garage2: '',
    garage3: '',
    garage4: '',
    garage5: '',
    garage6: '',
    garage7: '',
    garage8: '',
    garage9: '',
    garage10: '',
    vinewoodGarage: '',
    eclipseBlvdGarage: '',
    hangar: '',
    terrorbyte: '',
    moc: '',
    avenger: '',
    clubhouse: '',
    nightclub: '',
    retroArcade: '',
    salvageYard: ''
  });
  const [agency, setAgency] = useState('');
  const [arena, setArena] = useState('');
  const [autoShop, setAutoShop] = useState('');
  const [bailEnforcement, setBailEnforcement] = useState('');
  const [bunker, setBunker] = useState('');
  const [casinoPenthouse, setCasinoPenthouse] = useState('');
  const [executiveOfficeGarage1, setExecutiveOfficeGarage1] = useState('');
  const [executiveOfficeGarage2, setExecutiveOfficeGarage2] = useState('');
  const [executiveOfficeGarage3, setExecutiveOfficeGarage3] = useState('');
  const [facility, setFacility] = useState('');
  const [garage1, setGarage1] = useState('');
  const [garage2, setGarage2] = useState('');
  const [garage3, setGarage3] = useState('');
  const [garage4, setGarage4] = useState('');
  const [garage5, setGarage5] = useState('');
  const [garage6, setGarage6] = useState('');
  const [garage7, setGarage7] = useState('');
  const [garage8, setGarage8] = useState('');
  const [garage9, setGarage9] = useState('');
  const [garage10, setGarage10] = useState('');
  const [vinewoodGarage, setVinewoodGarage] = useState('');
  const [eclipseBlvdGarage, setEclipseBlvdGarage] = useState('');
  const [hangar, setHangar] = useState('');
  const [terrorbyte, setTerrorbyte] = useState('');
  const [moc, setMoc] = useState('');
  const [avenger, setAvenger] = useState('');
  const [clubhouse, setClubhouse] = useState('');
  const [nightclub, setNightclub] = useState('');
  const [retroArcade, setRetroArcade] = useState('');
  const [salvageYard, setSalvageYard] = useState('');

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    e.preventDefault();

    alert(`Selecionado ${garagem} para o personagem ${personagemId}.`);
    setGaragem(prevState => ({
        ...prevState,
        [name]: value
    }));

    // Limpa o formulário após a submissão
    // setGaragem('');
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Agência:
                <select value={agency} onChange={(e) => setAgency(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.agency.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>

        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Oficina de Arena:
                <select value={arena} onChange={(e) => setArena(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.arena.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>

        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Oficina de Tuning:
                <select value={autoShop} onChange={(e) => setAutoShop(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.autoShop.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>

        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Escritório de Fiança:
                <select value={bailEnforcement} onChange={(e) => setBailEnforcement(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.bailEnforcement.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>

        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Bunker:
                <select value={bunker} onChange={(e) => setBunker(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.bunker.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>

        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Garagem da Penthouse:
                <select value={casinoPenthouse} onChange={(e) => setCasinoPenthouse(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.casinoPenthouse.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>

        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Garagem 1 do Escritório Executivo:
                <select value={executiveOfficeGarage1} onChange={(e) => setExecutiveOfficeGarage1(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.executiveOfficeGarage1.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>

        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Garagem 2 do Escritório Executivo:
                <select value={executiveOfficeGarage2} onChange={(e) => setExecutiveOfficeGarage2(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.executiveOfficeGarage2.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>

        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Garagem 3 do Escritório Executivo:
                <select value={executiveOfficeGarage3} onChange={(e) => setExecutiveOfficeGarage3(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.executiveOfficeGarage3.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>

        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Instalações do Complexo:
                <select value={facility} onChange={(e) => setFacility(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.facility.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>

        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Garagem 1:
                <select value={garage1} onChange={(e) => setGarage1(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>

        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Garagem 2:
                <select value={garage2} onChange={(e) => setGarage2(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>

        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Garagem 3:
                <select value={garage3} onChange={(e) => setGarage3(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>

        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Garagem 4:
                <select value={garage4} onChange={(e) => setGarage4(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>

        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Garagem 5:
                <select value={garage5} onChange={(e) => setGarage5(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>

        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Garagem 6:
                <select value={garage6} onChange={(e) => setGarage6(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>

        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Garagem 7:
                <select value={garage7} onChange={(e) => setGarage7(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>

        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Garagem 8:
                <select value={garage8} onChange={(e) => setGarage8(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>

        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Garagem 9:
                <select value={garage9} onChange={(e) => setGarage9(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>

        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Garagem 10:
                <select value={garage10} onChange={(e) => setGarage10(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>

        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Garagem do Clube Vinewood:
                <select value={vinewoodGarage} onChange={(e) => setVinewoodGarage(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.vinewoodGarage.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>

        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Garagem de Alto padrão Eclipse Blvd:
                <select value={eclipseBlvdGarage} onChange={(e) => setEclipseBlvdGarage(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.eclipseBlvdGarage.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>

        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Hangar:
                <select value={hangar} onChange={(e) => setHangar(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.hangar.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>

        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Terrorbyte:
                <select value={terrorbyte} onChange={(e) => setTerrorbyte(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.terrorbyte.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>

        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Centro de Operações Móveis:
                <select value={moc} onChange={(e) => setMoc(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.moc.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>

        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Avenger:
                <select value={avenger} onChange={(e) => setAvenger(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.avenger.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>

        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Motoclube:
                <select value={clubhouse} onChange={(e) => setClubhouse(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.clubhouse.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>

        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Boate:
                <select value={nightclub} onChange={(e) => setNightclub(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.nightclub.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>

        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Arcade:
                <select value={retroArcade} onChange={(e) => setRetroArcade(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.retroArcade.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>

        <form onSubmit={handleSubmit}>
            <label className='list-garage-imput'>
                Pátio do Ferro-velho:
                <select value={salvageYard} onChange={(e) => setSalvageYard(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.salvageYard.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </label>
        </form>
    </div>
  );
}

export default List;