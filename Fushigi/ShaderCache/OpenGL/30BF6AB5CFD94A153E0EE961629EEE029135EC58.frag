#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_fragment_shader_interlock : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 7, std140) uniform _fp_c6
{
    precise vec4 data[4096];
} fp_c6;

layout (binding = 4, std140) uniform _fp_c3
{
    precise vec4 data[4096];
} fp_c3;

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

layout (binding = 2, std140) uniform _fp_c1
{
    precise vec4 data[4096];
} fp_c1;

layout (binding = 0) uniform sampler2D fp_t_tcb_24;
layout (binding = 1) uniform samplerCubeArray fp_t_tcb_14;
layout (binding = 2) uniform samplerCube fp_t_tcb_18;
layout (binding = 3) uniform sampler2D fp_t_tcb_20;
layout (binding = 4) uniform sampler3D fp_t_cb7_20;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 3) in vec4 in_attr3;
layout (location = 4) in vec4 in_attr4;
layout (location = 5) in vec4 in_attr5;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise vec4 temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    precise float temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
    precise float temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    precise float temp_19;
    precise float temp_20;
    precise float temp_21;
    precise float temp_22;
    precise float temp_23;
    precise float temp_24;
    precise float temp_25;
    precise float temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    precise float temp_32;
    precise float temp_33;
    precise float temp_34;
    precise float temp_35;
    precise float temp_36;
    precise float temp_37;
    precise float temp_38;
    precise float temp_39;
    precise float temp_40;
    precise float temp_41;
    precise float temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    bool temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise vec3 temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    precise vec3 temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise vec3 temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    precise float temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    precise float temp_126;
    precise float temp_127;
    precise float temp_128;
    precise float temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    precise float temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    precise float temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    precise float temp_146;
    precise float temp_147;
    precise float temp_148;
    precise float temp_149;
    precise float temp_150;
    precise float temp_151;
    precise float temp_152;
    precise float temp_153;
    precise float temp_154;
    precise float temp_155;
    precise float temp_156;
    precise float temp_157;
    precise float temp_158;
    precise float temp_159;
    precise float temp_160;
    precise float temp_161;
    precise float temp_162;
    precise float temp_163;
    precise float temp_164;
    precise float temp_165;
    precise float temp_166;
    precise float temp_167;
    precise float temp_168;
    precise float temp_169;
    precise float temp_170;
    precise float temp_171;
    precise float temp_172;
    precise float temp_173;
    precise float temp_174;
    precise float temp_175;
    precise float temp_176;
    precise float temp_177;
    precise float temp_178;
    precise float temp_179;
    precise float temp_180;
    precise float temp_181;
    precise float temp_182;
    precise float temp_183;
    precise float temp_184;
    precise float temp_185;
    precise float temp_186;
    precise float temp_187;
    precise float temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    precise float temp_192;
    precise float temp_193;
    precise float temp_194;
    precise float temp_195;
    precise float temp_196;
    precise float temp_197;
    precise float temp_198;
    precise float temp_199;
    precise float temp_200;
    precise float temp_201;
    precise float temp_202;
    precise float temp_203;
    precise float temp_204;
    precise float temp_205;
    precise float temp_206;
    precise float temp_207;
    precise float temp_208;
    precise float temp_209;
    precise float temp_210;
    precise float temp_211;
    precise float temp_212;
    precise float temp_213;
    precise float temp_214;
    precise float temp_215;
    precise float temp_216;
    precise float temp_217;
    precise float temp_218;
    precise float temp_219;
    precise float temp_220;
    precise float temp_221;
    precise float temp_222;
    precise float temp_223;
    precise float temp_224;
    precise float temp_225;
    precise float temp_226;
    precise float temp_227;
    precise float temp_228;
    precise float temp_229;
    precise float temp_230;
    precise float temp_231;
    precise float temp_232;
    precise float temp_233;
    precise float temp_234;
    precise float temp_235;
    precise float temp_236;
    precise float temp_237;
    precise float temp_238;
    precise float temp_239;
    precise float temp_240;
    precise float temp_241;
    precise float temp_242;
    precise float temp_243;
    precise float temp_244;
    precise float temp_245;
    precise float temp_246;
    precise float temp_247;
    precise float temp_248;
    precise float temp_249;
    precise float temp_250;
    precise float temp_251;
    precise float temp_252;
    precise float temp_253;
    precise float temp_254;
    precise float temp_255;
    precise float temp_256;
    precise float temp_257;
    precise float temp_258;
    precise float temp_259;
    precise float temp_260;
    precise float temp_261;
    precise float temp_262;
    precise float temp_263;
    precise float temp_264;
    precise float temp_265;
    precise float temp_266;
    precise float temp_267;
    precise float temp_268;
    // 0x000008: 0x4C9807980647000D Mov
    // 0x000010: 0xE003FF87CFF7FF00 Ipa
    // 0x000018: 0x5080000000470000 Mufu
    // 0x000028: 0xE043FF8B0007FF06 Ipa
    temp_0 = in_attr3.x;
    // 0x000030: 0xE043FF8B4007FF14 Ipa
    temp_1 = in_attr3.y;
    // 0x000038: 0xD832024061470614 Texs
    temp_2 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyzw;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    temp_5 = temp_2.z;
    temp_6 = temp_2.w;
    // 0x000048: 0xE043FF880007FF19 Ipa
    temp_7 = in_attr0.x;
    // 0x000050: 0xE043FF890007FF04 Ipa
    temp_8 = in_attr1.x;
    // 0x000058: 0xE043FF884007FF02 Ipa
    temp_9 = in_attr0.y;
    // 0x000068: 0xE043FF894007FF05 Ipa
    temp_10 = in_attr1.y;
    // 0x000070: 0xE043FF888007FF01 Ipa
    temp_11 = in_attr0.z;
    // 0x000078: 0xE043FF898007FF1A Ipa
    temp_12 = in_attr1.z;
    // 0x000088: 0x5C68100001971903 Fmul
    temp_13 = temp_7 * temp_7;
    // 0x000090: 0xE003FF870FF7FF17 Ipa
    temp_14 = gl_FragCoord.x;
    temp_15 = support_buffer.render_scale[0];
    temp_16 = temp_14 / temp_15;
    // 0x000098: 0x5C68100000470408 Fmul
    temp_17 = temp_8 * temp_8;
    // 0x0000A8: 0xE003FF874FF7FF16 Ipa
    temp_18 = gl_FragCoord.y;
    temp_19 = support_buffer.render_scale[0];
    temp_20 = temp_18 / temp_19;
    // 0x0000B0: 0x59A0018000270203 Ffma
    temp_21 = fma(temp_9, temp_9, temp_13);
    // 0x0000B8: 0xE043FF8D8007FF0E Ipa
    temp_22 = in_attr5.z;
    // 0x0000C8: 0x59A0040000570508 Ffma
    temp_23 = fma(temp_10, temp_10, temp_17);
    // 0x0000D0: 0x59A0018000170103 Ffma
    temp_24 = fma(temp_11, temp_11, temp_21);
    // 0x0000D8: 0x59A0040001A71A08 Ffma
    temp_25 = fma(temp_12, temp_12, temp_23);
    // 0x0000E8: 0x5080000000570303 Mufu
    temp_26 = inversesqrt(temp_24);
    // 0x0000F0: 0x4C59101806870D0D Fadd
    temp_27 = 0.0 - fp_c6.data[25].x;
    temp_28 = temp_27 + fp_c6.data[26].x;
    // 0x0000F8: 0x508000000057080B Mufu
    temp_29 = inversesqrt(temp_25);
    // 0x000108: 0x5C68100000371919 Fmul
    temp_30 = temp_7 * temp_26;
    // 0x000110: 0x5C69100000B70404 Fmul
    temp_31 = 0.0 - temp_29;
    temp_32 = temp_8 * temp_31;
    // 0x000118: 0x5C68100000370202 Fmul
    temp_33 = temp_9 * temp_26;
    // 0x000128: 0x5C68100000370101 Fmul
    temp_34 = temp_11 * temp_26;
    // 0x000130: 0x5C69100000B70505 Fmul
    temp_35 = 0.0 - temp_29;
    temp_36 = temp_10 * temp_35;
    // 0x000138: 0x5C68100000471903 Fmul
    temp_37 = temp_30 * temp_32;
    // 0x000148: 0x5C69100000B71A1A Fmul
    temp_38 = 0.0 - temp_29;
    temp_39 = temp_12 * temp_38;
    // 0x000150: 0x59A0018000570203 Ffma
    temp_40 = fma(temp_33, temp_36, temp_37);
    // 0x000158: 0x59A4018001A70103 Ffma
    temp_41 = fma(temp_34, temp_39, temp_40);
    temp_42 = clamp(temp_41, 0.0, 1.0);
    // 0x000168: 0x5C68100000371909 Fmul
    temp_43 = temp_30 * temp_42;
    // 0x000170: 0x5C6810000037020A Fmul
    temp_44 = temp_33 * temp_42;
    // 0x000178: 0x5C6810000037010B Fmul
    temp_45 = temp_34 * temp_42;
    // 0x000188: 0x32A2024000070909 Ffma
    temp_46 = 0.0 - temp_32;
    temp_47 = fma(temp_43, 2.0, temp_46);
    // 0x000190: 0x32A202C000070A0A Ffma
    temp_48 = 0.0 - temp_36;
    temp_49 = fma(temp_44, 2.0, temp_48);
    // 0x000198: 0x32A20D4000070B0B Ffma
    temp_50 = 0.0 - temp_39;
    temp_51 = fma(temp_45, 2.0, temp_50);
    // 0x0001A8: 0x5C62578000A70908 Fmnmx
    temp_52 = abs(temp_47);
    temp_53 = abs(temp_49);
    temp_54 = max(temp_52, temp_53);
    // 0x0001B0: 0x5C60578000870B08 Fmnmx
    temp_55 = abs(temp_51);
    temp_56 = max(temp_55, temp_54);
    // 0x0001B8: 0x5080000000470808 Mufu
    temp_57 = 1.0 / temp_56;
    // 0x0001C8: 0x5C6257800027190C Fmnmx
    temp_58 = abs(temp_30);
    temp_59 = abs(temp_33);
    temp_60 = max(temp_58, temp_59);
    // 0x0001D0: 0x4C9807980A070011 Mov
    // 0x0001D8: 0x4C98079806570018 Mov
    // 0x0001E8: 0x4C98079806670010 Mov
    // 0x0001F0: 0x5C68100000870909 Fmul
    temp_61 = temp_47 * temp_57;
    // 0x0001F8: 0x5C68100000870A0A Fmul
    temp_62 = temp_49 * temp_57;
    // 0x000208: 0x5C69100000870B0B Fmul
    temp_63 = 0.0 - temp_57;
    temp_64 = temp_51 * temp_63;
    // 0x000210: 0x5C60578000C70108 Fmnmx
    temp_65 = abs(temp_34);
    temp_66 = max(temp_65, temp_60);
    // 0x000218: 0xE043FF8D0007FF0C Ipa
    temp_67 = in_attr5.x;
    // 0x000228: 0x386013BF80071111 Fmnmx
    temp_68 = min(fp_c6.data[40].x, 1.0);
    // 0x000230: 0x5080000000470808 Mufu
    temp_69 = 1.0 / temp_66;
    // 0x000238: 0x4C59101806971818 Fadd
    temp_70 = 0.0 - fp_c6.data[25].y;
    temp_71 = temp_70 + fp_c6.data[26].y;
    // 0x000248: 0x4C59101806A71010 Fadd
    temp_72 = 0.0 - fp_c6.data[25].z;
    temp_73 = temp_72 + fp_c6.data[26].z;
    // 0x000250: 0x5C69100000870112 Fmul
    temp_74 = 0.0 - temp_69;
    temp_75 = temp_34 * temp_74;
    // 0x000258: 0x4C98079C0207001F Mov
    // 0x000268: 0x4C68100C04A71717 Fmul
    temp_76 = temp_16 * fp_c3.data[18].z;
    // 0x000270: 0x4C68100C04B71616 Fmul
    temp_77 = temp_20 * fp_c3.data[18].w;
    // 0x000278: 0x4BB1839406070707 Fsetp
    temp_78 = temp_6 < fp_c5.data[24].x;
    // 0x000288: 0xE33000000000000F Kil
    if (temp_78)
    {
        discard;
    }
    // 0x000290: 0x5C6017800157140F Fmnmx
    temp_79 = max(temp_3, temp_4);
    // 0x000298: 0x5C60178000F7060F Fmnmx
    temp_80 = max(temp_5, temp_79);
    // 0x0002A8: 0x51A0069806470F1B Ffma
    temp_81 = fma(temp_80, temp_28, fp_c6.data[25].x);
    // 0x0002B0: 0xE043FF8D4007FF0D Ipa
    temp_82 = in_attr5.y;
    // 0x0002B8: 0x51A00C1806570F18 Ffma
    temp_83 = fma(temp_80, temp_71, fp_c6.data[25].y);
    // 0x0002C8: 0x51A0081806670F0F Ffma
    temp_84 = fma(temp_80, temp_73, fp_c6.data[25].z);
    // 0x0002D0: 0x5C68100000871910 Fmul
    temp_85 = temp_30 * temp_69;
    // 0x0002D8: 0x5C68100001B7141B Fmul
    temp_86 = temp_3 * temp_81;
    // 0x0002E8: 0x4C60178400071114 Fmnmx
    temp_87 = max(temp_68, fp_c1.data[0].x);
    // 0x0002F0: 0x5C68100000870211 Fmul
    temp_88 = temp_33 * temp_69;
    // 0x0002F8: 0x010000000017F008 Mov32i
    // 0x000308: 0x38681040E007141C Fmul
    temp_89 = temp_87 * 7.0;
    // 0x000310: 0x3868104080071413 Fmul
    temp_90 = temp_87 * 4.0;
    // 0x000318: 0xC1BA0143F1C70808 Tex
    temp_91 = textureLod(fp_t_tcb_14, vec4(temp_61, temp_62, temp_64, float(1)), temp_89).xyz;
    temp_92 = temp_91.x;
    temp_93 = temp_91.y;
    temp_94 = temp_91.z;
    // 0x000328: 0xD9A2018101271012 Texs
    temp_95 = textureLod(fp_t_tcb_18, vec3(temp_85, temp_88, temp_75), temp_90).xyz;
    temp_96 = temp_95.x;
    temp_97 = temp_95.y;
    temp_98 = temp_95.z;
    // 0x000330: 0xDEBA0000C1F70C0C TexB
    temp_99 = texture(fp_t_cb7_20, vec3(temp_67, temp_82, temp_22)).x;
    // 0x000338: 0xD8220201C1671716 Texs
    temp_100 = texture(fp_t_tcb_20, vec2(temp_76, temp_77)).xyz;
    temp_101 = temp_100.x;
    temp_102 = temp_100.y;
    temp_103 = temp_100.z;
    // 0x000348: 0x3859103F8007141D Fadd
    temp_104 = 0.0 - temp_87;
    temp_105 = temp_104 + 1.0;
    // 0x000350: 0x4C58301805D70505 Fadd
    temp_106 = 0.0 - fp_c6.data[23].y;
    temp_107 = temp_36 + temp_106;
    // 0x000358: 0x4C58301805E71A1A Fadd
    temp_108 = 0.0 - fp_c6.data[23].z;
    temp_109 = temp_39 + temp_108;
    // 0x000368: 0x1E23E468DB97031E Fmul32i
    temp_110 = temp_42 * 0.193900004;
    // 0x000370: 0x0104066978D7F00B Mov32i
    // 0x000378: 0x5C68100001871518 Fmul
    temp_111 = temp_4 * temp_83;
    // 0x000388: 0x5C68100001D71D1D Fmul
    temp_112 = temp_105 * temp_105;
    // 0x000390: 0x5C68100001D71D1D Fmul
    temp_113 = temp_112 * temp_112;
    // 0x000398: 0x0103E2CD9E87F00E Mov32i
    // 0x0003A8: 0x4C58301805C7040D Fadd
    temp_114 = 0.0 - fp_c6.data[23].x;
    temp_115 = temp_32 + temp_114;
    // 0x0003B0: 0x49A00F0400271D1E Ffma
    temp_116 = fma(temp_113, fp_c1.data[0].z, temp_110);
    // 0x0003B8: 0x49A2058400371D0B Ffma
    temp_117 = fma(temp_113, fp_c1.data[0].w, -3.60299993);
    // 0x0003C8: 0x49A2070400571D0E Ffma
    temp_118 = fma(temp_113, fp_c1.data[1].y, -0.168799996);
    // 0x0003D0: 0x088BF05D63971E1E Fadd32i
    temp_119 = temp_116 + -0.522800028;
    // 0x0003D8: 0x51A0058400471D0B Ffma
    temp_120 = fma(temp_113, temp_117, fp_c1.data[1].x);
    // 0x0003E8: 0x5C68100000E71D04 Fmul
    temp_121 = temp_113 * temp_118;
    // 0x0003F0: 0x5C68100000D70D0E Fmul
    temp_122 = temp_115 * temp_115;
    // 0x0003F8: 0x5C68100001E7031E Fmul
    temp_123 = temp_42 * temp_119;
    // 0x000408: 0x59A0070000570511 Ffma
    temp_124 = fma(temp_107, temp_107, temp_122);
    // 0x000410: 0x59A00F0000B71D0B Ffma
    temp_125 = fma(temp_113, temp_120, temp_123);
    // 0x000418: 0x59A0088001A71A11 Ffma
    temp_126 = fma(temp_109, temp_109, temp_124);
    // 0x000428: 0x508000000057111F Mufu
    temp_127 = inversesqrt(temp_126);
    // 0x000430: 0x01040DF760C7F011 Mov32i
    // 0x000438: 0x5C68100001F70D0E Fmul
    temp_128 = temp_115 * temp_127;
    // 0x000448: 0x5C68100001F7050D Fmul
    temp_129 = temp_107 * temp_127;
    // 0x000450: 0x5C68100001F71A1A Fmul
    temp_130 = temp_109 * temp_127;
    // 0x000458: 0x5C68100000E7191F Fmul
    temp_131 = temp_30 * temp_128;
    // 0x000468: 0x4C69101805C71919 Fmul
    temp_132 = 0.0 - fp_c6.data[23].x;
    temp_133 = temp_30 * temp_132;
    // 0x000470: 0x4C69101805C70E1E Fmul
    temp_134 = 0.0 - fp_c6.data[23].x;
    temp_135 = temp_128 * temp_134;
    // 0x000478: 0x0103F0000007F00E Mov32i
    // 0x000488: 0x59A00F8000D7021F Ffma
    temp_136 = fma(temp_33, temp_129, temp_131);
    // 0x000490: 0x49A10C9805D70202 Ffma
    temp_137 = 0.0 - fp_c6.data[23].y;
    temp_138 = fma(temp_33, temp_137, temp_133);
    // 0x000498: 0x49A10F1805D70D05 Ffma
    temp_139 = 0.0 - fp_c6.data[23].y;
    temp_140 = fma(temp_129, temp_139, temp_135);
    // 0x0004A8: 0x010404000007F01E Mov32i
    // 0x0004B0: 0x59A40F8001A7011F Ffma
    temp_141 = fma(temp_34, temp_130, temp_136);
    temp_142 = clamp(temp_141, 0.0, 1.0);
    // 0x0004B8: 0x49A5011805E70102 Ffma
    temp_143 = 0.0 - fp_c6.data[23].z;
    temp_144 = fma(temp_34, temp_143, temp_138);
    temp_145 = clamp(temp_144, 0.0, 1.0);
    // 0x0004C8: 0x51A40A0400071401 Ffma
    temp_146 = fma(temp_87, temp_87, fp_c1.data[0].x);
    temp_147 = clamp(temp_146, 0.0, 1.0);
    // 0x0004D0: 0x49A5029805E71A1A Ffma
    temp_148 = 0.0 - fp_c6.data[23].z;
    temp_149 = fma(temp_130, temp_148, temp_140);
    temp_150 = clamp(temp_149, 0.0, 1.0);
    // 0x0004D8: 0x32A0073F00071414 Ffma
    temp_151 = fma(temp_87, 0.5, 0.5);
    // 0x0004E8: 0x5C68100000170105 Fmul
    temp_152 = temp_147 * temp_147;
    // 0x0004F0: 0x49A2088400171A11 Ffma
    temp_153 = fma(temp_150, fp_c1.data[0].y, -6.98316002);
    // 0x0004F8: 0x5C68120001471414 Fmul
    temp_154 = temp_151 * 0.5;
    temp_155 = temp_154 * temp_151;
    // 0x000508: 0x59A20F8000571F05 Ffma
    temp_156 = 0.0 - temp_142;
    temp_157 = fma(temp_142, temp_152, temp_156);
    // 0x000510: 0x5C68100001171A1A Fmul
    temp_158 = temp_150 * temp_153;
    // 0x000518: 0x59A101000147020E Ffma
    temp_159 = 0.0 - temp_155;
    temp_160 = fma(temp_145, temp_159, temp_145);
    // 0x000528: 0x51A0028400A71F0D Ffma
    temp_161 = fma(temp_142, temp_157, fp_c1.data[2].z);
    // 0x000530: 0x010410676C97F005 Mov32i
    // 0x000538: 0x5C58100000E7140E Fadd
    temp_162 = temp_155 + temp_160;
    // 0x000548: 0x5C90008001A70019 Rro
    // 0x000550: 0x5080000000470E0E Mufu
    temp_163 = 1.0 / temp_162;
    // 0x000558: 0x49A0028400670305 Ffma
    temp_164 = fma(temp_42, fp_c1.data[1].z, 8.40400028);
    // 0x000568: 0x51A0028400770305 Ffma
    temp_165 = fma(temp_42, temp_164, fp_c1.data[1].w);
    // 0x000570: 0x51A0028400870305 Ffma
    temp_166 = fma(temp_42, temp_165, fp_c1.data[2].x);
    // 0x000578: 0x59A1018001470303 Ffma
    temp_167 = 0.0 - temp_155;
    temp_168 = fma(temp_42, temp_167, temp_42);
    // 0x000588: 0x5C60138000570405 Fmnmx
    temp_169 = min(temp_121, temp_166);
    // 0x000590: 0x5C58100000371403 Fadd
    temp_170 = temp_155 + temp_168;
    // 0x000598: 0x5080000000470D14 Mufu
    temp_171 = 1.0 / temp_161;
    // 0x0005A8: 0x4C98079407B70004 Mov
    // 0x0005B0: 0x5080000000470303 Mufu
    temp_172 = 1.0 / temp_170;
    // 0x0005B8: 0x386C104248070404 Fmul
    temp_173 = fp_c5.data[30].w * 50.0;
    temp_174 = clamp(temp_173, 0.0, 1.0);
    // 0x0005C8: 0x5C68100001470111 Fmul
    temp_175 = temp_147 * temp_171;
    // 0x0005D0: 0xE04BFF8C4007FF01 Ipa
    temp_176 = in_attr4.y;
    temp_177 = clamp(temp_176, 0.0, 1.0);
    // 0x0005D8: 0x5C68120000E7031A Fmul
    temp_178 = temp_172 * 0.5;
    temp_179 = temp_178 * temp_163;
    // 0x0005E8: 0x5080000000271914 Mufu
    temp_180 = exp2(temp_158);
    // 0x0005F0: 0x5C5C30000FF70503 Fadd
    temp_181 = temp_169 + -0.0;
    temp_182 = clamp(temp_181, 0.0, 1.0);
    // 0x0005F8: 0x4C5C100400970B05 Fadd
    temp_183 = temp_125 + fp_c1.data[2].y;
    temp_184 = clamp(temp_183, 0.0, 1.0);
    // 0x000608: 0x5C68100001171111 Fmul
    temp_185 = temp_175 * temp_175;
    // 0x000610: 0x5C68100000470304 Fmul
    temp_186 = temp_182 * temp_174;
    // 0x000618: 0x5C59100000570305 Fadd
    temp_187 = 0.0 - temp_182;
    temp_188 = temp_187 + temp_184;
    // 0x000628: 0x5C68100001A71111 Fmul
    temp_189 = temp_185 * temp_179;
    // 0x000630: 0x49A10A1407B71414 Ffma
    temp_190 = 0.0 - fp_c5.data[30].w;
    temp_191 = fma(temp_180, temp_190, temp_180);
    // 0x000638: 0x49A0021407B70505 Ffma
    temp_192 = fma(temp_188, fp_c5.data[30].w, temp_186);
    // 0x000648: 0x5C68100001170211 Fmul
    temp_193 = temp_145 * temp_189;
    // 0x000650: 0x4C58101407B71414 Fadd
    temp_194 = temp_191 + fp_c5.data[30].w;
    // 0x000658: 0x4C68101801571402 Fmul
    temp_195 = temp_194 * fp_c6.data[5].y;
    // 0x000668: 0x4C6810180147140D Fmul
    temp_196 = temp_194 * fp_c6.data[5].x;
    // 0x000670: 0x4C6810180167140B Fmul
    temp_197 = temp_194 * fp_c6.data[5].z;
    // 0x000678: 0x33A00F400007010E Ffma
    temp_198 = fma(temp_177, -2.0, 3.0);
    // 0x000688: 0x5C68100000170101 Fmul
    temp_199 = temp_177 * temp_177;
    // 0x000690: 0x5C68100001170204 Fmul
    temp_200 = temp_195 * temp_193;
    // 0x000698: 0x5C68100000F70602 Fmul
    temp_201 = temp_5 * temp_84;
    // 0x0006A8: 0x5C68100001170D0D Fmul
    temp_202 = temp_196 * temp_193;
    // 0x0006B0: 0x5C68100001170B0B Fmul
    temp_203 = temp_197 * temp_193;
    // 0x0006B8: 0x5C68100000170E03 Fmul
    temp_204 = temp_198 * temp_199;
    // 0x0006C8: 0xE043FF8C0007FF01 Ipa
    temp_205 = in_attr4.x;
    // 0x0006D0: 0x4C9807980B470011 Mov
    // 0x0006D8: 0x4C68101803770303 Fmul
    temp_206 = temp_204 * fp_c6.data[13].w;
    // 0x0006E8: 0xF0F0000034170000 Depbar
    // 0x0006F0: 0x49A0091808570806 Ffma
    temp_207 = fma(temp_92, fp_c6.data[33].y, temp_96);
    // 0x0006F8: 0x49A0099808570913 Ffma
    temp_208 = fma(temp_93, fp_c6.data[33].y, temp_97);
    // 0x000708: 0x49A0081808570A0A Ffma
    temp_209 = fma(temp_94, fp_c6.data[33].y, temp_98);
    // 0x000710: 0x4C98079802870008 Mov
    // 0x000718: 0x5C68100000670506 Fmul
    temp_210 = temp_192 * temp_207;
    // 0x000728: 0x5C68100001370509 Fmul
    temp_211 = temp_192 * temp_208;
    // 0x000730: 0x5C68100000A70505 Fmul
    temp_212 = temp_192 * temp_209;
    // 0x000738: 0x4C98079802A7000A Mov
    // 0x000748: 0x49A0030400B70D06 Ffma
    temp_213 = fma(temp_202, fp_c1.data[2].w, temp_210);
    // 0x000750: 0x49A0048400B70409 Ffma
    temp_214 = fma(temp_200, fp_c1.data[2].w, temp_211);
    // 0x000758: 0x51A208980B471616 Ffma
    temp_215 = 0.0 - fp_c6.data[45].x;
    temp_216 = fma(temp_101, fp_c6.data[45].x, temp_215);
    // 0x000768: 0x51A208980B471717 Ffma
    temp_217 = 0.0 - fp_c6.data[45].x;
    temp_218 = fma(temp_102, fp_c6.data[45].x, temp_217);
    // 0x000770: 0x49A0028400B70B05 Ffma
    temp_219 = fma(temp_203, fp_c1.data[2].w, temp_212);
    // 0x000778: 0xE043FF8A8007FF0B Ipa
    temp_220 = in_attr2.z;
    // 0x000788: 0x51A208980B471C1C Ffma
    temp_221 = 0.0 - fp_c6.data[45].x;
    temp_222 = fma(temp_103, fp_c6.data[45].x, temp_221);
    // 0x000790: 0x49A0031406C71B1B Ffma
    temp_223 = fma(temp_86, fp_c5.data[27].x, temp_213);
    // 0x000798: 0x4C98079802970006 Mov
    // 0x0007A8: 0x51A0041802871616 Ffma
    temp_224 = fma(temp_216, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x0007B0: 0x49A500980BC70C0C Ffma
    temp_225 = 0.0 - fp_c6.data[47].x;
    temp_226 = fma(temp_99, temp_225, temp_205);
    temp_227 = clamp(temp_226, 0.0, 1.0);
    // 0x0007B8: 0x49A0049406C71801 Ffma
    temp_228 = fma(temp_111, fp_c5.data[27].x, temp_214);
    // 0x0007C8: 0x5080000000370C0C Mufu
    temp_229 = log2(temp_227);
    // 0x0007D0: 0x49A0029406C70202 Ffma
    temp_230 = fma(temp_201, fp_c5.data[27].x, temp_219);
    // 0x0007D8: 0x51A0031802971717 Ffma
    temp_231 = fma(temp_218, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x0007E8: 0x5C58300001671B04 Fadd
    temp_232 = 0.0 - temp_224;
    temp_233 = temp_223 + temp_232;
    // 0x0007F0: 0x51A0051802A71C1C Ffma
    temp_234 = fma(temp_222, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x0007F8: 0x49A2019803570309 Ffma
    temp_235 = 0.0 - temp_206;
    temp_236 = fma(temp_206, fp_c6.data[13].y, temp_235);
    // 0x000808: 0x49A00B180BF70408 Ffma
    temp_237 = fma(temp_233, fp_c6.data[47].w, temp_224);
    // 0x000810: 0x5C58300001770104 Fadd
    temp_238 = 0.0 - temp_231;
    temp_239 = temp_228 + temp_238;
    // 0x000818: 0x5C58300001C70205 Fadd
    temp_240 = 0.0 - temp_234;
    temp_241 = temp_230 + temp_240;
    // 0x000828: 0x4C68101803170C06 Fmul
    temp_242 = temp_229 * fp_c6.data[12].y;
    // 0x000830: 0x5C60178000871608 Fmnmx
    temp_243 = max(temp_224, temp_237);
    // 0x000838: 0x49A00B980BF70404 Ffma
    temp_244 = fma(temp_239, fp_c6.data[47].w, temp_231);
    // 0x000848: 0x49A00E180BF70505 Ffma
    temp_245 = fma(temp_241, fp_c6.data[47].w, temp_234);
    // 0x000850: 0x5C9000800067000A Rro
    // 0x000858: 0x49A2019803470306 Ffma
    temp_246 = 0.0 - temp_206;
    temp_247 = fma(temp_206, fp_c6.data[13].x, temp_246);
    // 0x000868: 0x5080000000270A0A Mufu
    temp_248 = exp2(temp_242);
    // 0x000870: 0x5C60178000471704 Fmnmx
    temp_249 = max(temp_231, temp_244);
    // 0x000878: 0x49A2019803670303 Ffma
    temp_250 = 0.0 - temp_206;
    temp_251 = fma(temp_206, fp_c6.data[13].z, temp_250);
    // 0x000888: 0x5C60178000571C05 Fmnmx
    temp_252 = max(temp_234, temp_245);
    // 0x000890: 0x59A0040000670800 Ffma
    temp_253 = fma(temp_243, temp_247, temp_243);
    // 0x000898: 0x59A0020000970404 Ffma
    temp_254 = fma(temp_249, temp_236, temp_249);
    // 0x0008A8: 0x5C9807800FF70006 Mov
    // 0x0008B0: 0x59A0028000370508 Ffma
    temp_255 = fma(temp_252, temp_251, temp_252);
    // 0x0008B8: 0x5C59100000071B00 Fadd
    temp_256 = 0.0 - temp_223;
    temp_257 = temp_256 + temp_253;
    // 0x0008C8: 0x5C59100000470103 Fadd
    temp_258 = 0.0 - temp_228;
    temp_259 = temp_258 + temp_254;
    // 0x0008D0: 0x4C68101802B70A05 Fmul
    temp_260 = temp_248 * fp_c6.data[10].w;
    // 0x0008D8: 0x5C59100000870204 Fadd
    temp_261 = 0.0 - temp_230;
    temp_262 = temp_261 + temp_255;
    // 0x0008E8: 0x4C58100C03870B08 Fadd
    temp_263 = temp_220 + fp_c3.data[14].x;
    // 0x0008F0: 0x59A00D8000570000 Ffma
    temp_264 = fma(temp_257, temp_260, temp_223);
    // 0x0008F8: 0x59A0008000570301 Ffma
    temp_265 = fma(temp_259, temp_260, temp_228);
    // 0x000908: 0x59A0010000570402 Ffma
    temp_266 = fma(temp_262, temp_260, temp_230);
    // 0x000910: 0x0103F6000007F005 Mov32i
    // 0x000918: 0x49A37F8C03C70804 Ffma
    temp_267 = 0.0 - fp_c3.data[15].x;
    temp_268 = fma(temp_263, temp_267, -0.0);
    // 0x000928: 0x5C98078000770003 Mov
    // 0x000930: 0xE30000000007000F Exit
    out_attr0.x = temp_264;
    out_attr0.y = temp_265;
    out_attr0.z = temp_266;
    out_attr0.w = temp_6;
    out_attr1.x = temp_268;
    out_attr1.y = 0.875;
    out_attr1.z = 0.0;
    out_attr1.w = temp_6;
    return;
}
