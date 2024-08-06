import React, { useState } from 'react';
import properties from '../../data/properties.json';
import './Styles.css';

function List({ personagemId }) {
  const [garagem, setGaragem] = useState('');
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
    e.preventDefault();
    // Aqui você pode adicionar a lógica para salvar a escolha da garagem no estado global ou enviar para um backend
    alert(`Garagem escolhida para o personagem ${personagemId}: ${garagem}`);
    // Limpa o formulário após a submissão
    setGaragem('');
  };

  return (
    <div>
        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Agência:<br/>
                <select value={agency} onChange={(e) => setAgency(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.agency.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>

        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Oficina de Arena:<br/>
                <select value={arena} onChange={(e) => setArena(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.arena.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>

        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Oficina de Tuning:<br/>
                <select value={autoShop} onChange={(e) => setAutoShop(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.autoShop.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>

        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Escritório de Fiança:<br/>
                <select value={bailEnforcement} onChange={(e) => setBailEnforcement(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.bailEnforcement.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>

        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Bunker:<br/>
                <select value={bunker} onChange={(e) => setBunker(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.bunker.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>

        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Garagem da Penthouse:<br/>
                <select value={casinoPenthouse} onChange={(e) => setCasinoPenthouse(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.casinoPenthouse.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>

        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Garagem 1 do Escritório Executivo:<br/>
                <select value={executiveOfficeGarage1} onChange={(e) => setExecutiveOfficeGarage1(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.executiveOfficeGarage1.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>

        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Garagem 2 do Escritório Executivo:<br/>
                <select value={executiveOfficeGarage2} onChange={(e) => setExecutiveOfficeGarage2(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.executiveOfficeGarage2.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>

        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Garagem 3 do Escritório Executivo:<br/>
                <select value={executiveOfficeGarage3} onChange={(e) => setExecutiveOfficeGarage3(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.executiveOfficeGarage3.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>

        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Instalações do Complexo:<br/>
                <select value={facility} onChange={(e) => setFacility(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.facility.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>

        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Garagem 1:<br/>
                <select value={garage1} onChange={(e) => setGarage1(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>

        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Garagem 2:<br/>
                <select value={garage2} onChange={(e) => setGarage2(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>

        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Garagem 3:<br/>
                <select value={garage3} onChange={(e) => setGarage3(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>

        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Garagem 4:<br/>
                <select value={garage4} onChange={(e) => setGarage4(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>

        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Garagem 5:<br/>
                <select value={garage5} onChange={(e) => setGarage5(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>

        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Garagem 6:<br/>
                <select value={garage6} onChange={(e) => setGarage6(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>

        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Garagem 7:<br/>
                <select value={garage7} onChange={(e) => setGarage7(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>

        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Garagem 8:<br/>
                <select value={garage8} onChange={(e) => setGarage8(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>

        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Garagem 9:<br/>
                <select value={garage9} onChange={(e) => setGarage9(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>

        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Garagem 10:<br/>
                <select value={garage10} onChange={(e) => setGarage10(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>

        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Garagem do Clube Vinewood:<br/>
                <select value={vinewoodGarage} onChange={(e) => setVinewoodGarage(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.vinewoodGarage.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>

        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Garagem de Alto padrão Eclipse Blvd:<br/>
                <select value={eclipseBlvdGarage} onChange={(e) => setEclipseBlvdGarage(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.eclipseBlvdGarage.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>

        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Hangar:<br/>
                <select value={hangar} onChange={(e) => setHangar(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.hangar.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>

        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Terrorbyte:<br/>
                <select value={terrorbyte} onChange={(e) => setTerrorbyte(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.terrorbyte.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>

        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Centro de Operações Móveis:<br/>
                <select value={moc} onChange={(e) => setMoc(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.moc.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>

        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Avenger:<br/>
                <select value={avenger} onChange={(e) => setAvenger(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.avenger.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>

        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Motoclube:<br/>
                <select value={clubhouse} onChange={(e) => setClubhouse(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.clubhouse.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>

        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Boate:<br/>
                <select value={nightclub} onChange={(e) => setNightclub(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.nightclub.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>

        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Arcade:<br/>
                <select value={retroArcade} onChange={(e) => setRetroArcade(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.retroArcade.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>

        <form className='form-garage' onSubmit={handleSubmit}>
            <label>
                Pátio do Ferro-velho:<br/>
                <select value={salvageYard} onChange={(e) => setSalvageYard(e.target.value)} required>
                    <option value="">Nenhum</option>
                    {properties.salvageYard.map((property) => (
                        <option key={property.value} value={property.value}>({property.capacity} vagas) {property.property}</option>
                    ))}
                </select>
                <button type="submit">Salvar</button>
            </label>
        </form>
    </div>
  );
}

export default List;